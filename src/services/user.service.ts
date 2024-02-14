import { UserEntityModel } from "model/entity/user.model";
import { BaseService } from "./base.service";
import { ApiResponse } from "model/service/api-response.model";

class UserService extends BaseService {
  createUser(payload: Partial<UserEntityModel>) {
    return this.axiosInstanceWithoutToken.post("users", payload);
  }

  getUsers(): Promise<ApiResponse<Array<UserEntityModel>>> {
    return this.axiosInstanceWithoutToken.get("users");
  }
}

export const userServiceInstance = new UserService();
