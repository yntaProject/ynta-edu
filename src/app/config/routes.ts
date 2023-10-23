import { HomePage } from "../../pages/home-page/home-page";
import { BooksPage } from "../../pages/books-page/books-page";
import { AuthorizationPage } from "../../pages/authorization-page/authorization-page";
import { NotFoundPage } from "../../pages/not-found-page/not-found-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";
import { RussianBooksPage } from "../../pages/books-page/russian-books-page/russian-books-page";
import { KazakhBooksPage } from "../../pages/books-page/kazakh-books-page/kazakh-books-page";
import { WorldwideBooksPage } from "../../pages/books-page/worldwide-books-page/worldwide-books-page";
import { AboutPage } from "../../pages/about-page/about-page";
import { CreativityPage } from "../../pages/creativity-page/creativity-page";
import { ContestPage } from "../../pages/contest-page/contest-page";

export const routes = [{
  path: "/",
  component: HomePage,
  isPrivate: false
}, {
  path: "/books",
  component: BooksPage,
  isPrivate: true,
}, {
  path: "/about",
  component: AboutPage,
  isPrivate: false,
}, {
  path: "/creativity",
  component: CreativityPage,
  isPrivate: true,
},{
  path: "/contest",
  component: ContestPage,
  isPrivate: false,
}, {
  path: "/books/russian",
  component: RussianBooksPage,
  isPrivate: true,
}, {
  path: "/books/kazakh",
  component: KazakhBooksPage,
  isPrivate: true
}, {
  path: "/books/worldwide",
  component: WorldwideBooksPage,
  isPrivate: true,
}, {
  path: "/auth",
  component: AuthorizationPage,
  isPrivate: false
}, {
  path: "/profile",
  component: ProfilePage,
  isPrivate: true
}, {
  path: "*",
  component: NotFoundPage,
  isPrivate: false
}];