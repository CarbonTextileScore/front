import { RoleDto } from "./role.dto";

export class AuthorityDto {
  id?: number;
  username?: string;
  role?: RoleDto;
  password?: string;
}
