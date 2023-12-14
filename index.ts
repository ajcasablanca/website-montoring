import { checkUrl } from "./src/tools/checkUrl";
import { IRequest, requests } from "./src/tools/requests";

const checkUrls = async (requests: IRequest[]) => {
    await Promise.all(
        requests.map(async (request) => {
            await checkUrl(request.url, request.config);
        })
    );
}

checkUrls(requests)