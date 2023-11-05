import { GetUltimateEntityDocumentsOrderingPositions } from "../../../types/api/get-ultimate-entity-documents-ordering-positions";
import { UltimateEntity } from "../../../types/ultimate-entity";
import {
    BACKEND_URL,
    ULTIMATE_ENTITIES_BACKEND_PATH,
} from "../../config-values";

export default async (
    ultimateEntityId: string,
): Promise<GetUltimateEntityDocumentsOrderingPositions> => {
    const response = await fetch(BACKEND_URL + ULTIMATE_ENTITIES_BACKEND_PATH + "/" + ultimateEntityId + "/ordering/documents", {
        method: "GET",
        credentials: "include",
    });

    const data = await response.json();

    return data;
};
