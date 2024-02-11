import { type ResponseResolver, HttpResponse } from 'msw';

const get: ResponseResolver = () => {
    return HttpResponse.json({
        message: 'TODO: MSW Supported Next App Router',
    });
};

export default get;
