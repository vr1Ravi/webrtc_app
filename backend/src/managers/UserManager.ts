import { Socket } from "socket.io";
import { User } from "./types";
import { RoomManager } from "./RoomManager";

export class UserManager {
  private users: User[];
  private queue: string[];
  private roomManager: RoomManager;

  constructor() {
    this.users = [];
    this.queue = [];
    this.roomManager = new RoomManager();
  }

  addUser(name: string, socket: Socket) {
    this.users.push({ name, socket });
    this.queue.push(socket.id);
    this.clearQueue();
  }

  removeUser(socketId: string) {
    const filteredUsers = this.users.filter(
      (user) => user.socket.id !== socketId
    );
    this.users = filteredUsers;
    this.queue = this.queue.filter((id) => id !== socketId);
  }
  clearQueue() {
    if (this.queue.length < 2) return;

    const user1 = this.users.find(
      (user) => user.socket.id === this.queue.pop()
    );
    const user2 = this.users.find(
      (user) => user.socket.id === this.queue.pop()
    );
    if (!user1 || !user2) return;

    const room = this.roomManager.createdRoom(user1, user2);
  }
}
