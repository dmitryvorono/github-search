import { TemplateRef } from "@angular/core";

export interface CardComponentProps {
  id: number;
  title: string;
  content: string | TemplateRef<any>;
  avatar: string;
  [key: string]: any;
}
