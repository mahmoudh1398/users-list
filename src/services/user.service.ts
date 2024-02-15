import { UserEntityModel } from "model/entity/user.model";
import { BaseService } from "./base.service";
import { ApiResponse } from "model/service/api-response.model";
import { USERS_ENDPOINT } from "enum/users-endpoint.enum";

class UserService extends BaseService {
  createUser(payload: Partial<UserEntityModel>) {
    return this.axiosInstanceWithoutToken.post(USERS_ENDPOINT.users, payload);
  }

  getUsers(): Promise<ApiResponse<Array<UserEntityModel>>> {
    return this.axiosInstanceWithoutToken.get(USERS_ENDPOINT.users);
  }

  deleteUser(id: number) {
    return this.axiosInstanceWithoutToken.delete(
      `${USERS_ENDPOINT.users}/${id}`
    );
  }
}

export const userServiceInstance = new UserService();
