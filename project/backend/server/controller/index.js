// Import all controllers within 1 file

import userController from "./user.controller";
import buttonController from "./buttons.controller";
import confirmController from "./confirm.controller/confirm.controller";
import rootController from "./root.controller";
import loginController from "./login.controller/login.controller";
import resetController from "./reset.controller/reset.controller";
import passwordController from "./password.controller/password.controller";
import logoutController from "./logout.controller/logout.controller";

export { rootController, userController, buttonController, confirmController, loginController, resetController, passwordController, logoutController };
