import HomeContainer from "../containers/HomeContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import AddExpenseContainer from "../containers/AddExpenseContainer";
import AddCategoryContainer from "../containers/AddCategoryContainer";
import ExpensesContainer from "../containers/ExpensesContainer";

import {
  OccultWhenLogedInRoute,
  ProtectedRoute
} from "./hocs/AuthorizedRoutes/AuthorizedRoutes";

export const EnhancedLoginRoute = OccultWhenLogedInRoute(
  "/main",
  LoginContainer
);
export const EnhancedRegisterRoute = OccultWhenLogedInRoute(
  "/main",
  RegisterContainer
);
export const EnhancedHomeRoute = ProtectedRoute("/login", HomeContainer);
export const EnhancedExpenseCreateRoute = ProtectedRoute(
  "/expense/create",
  AddExpenseContainer
);
export const EnhancedExpensesRoute = ProtectedRoute(
  "/expense",
  ExpensesContainer
);
export const EnhancedCategoryCreateRoute = ProtectedRoute(
  "/category/create",
  AddCategoryContainer
);
