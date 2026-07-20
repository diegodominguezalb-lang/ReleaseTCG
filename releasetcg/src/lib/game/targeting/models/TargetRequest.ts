import { TargetType } from "./TargetType";

export interface TargetRequest {

    type: TargetType;

    minimum: number;

    maximum: number;

}