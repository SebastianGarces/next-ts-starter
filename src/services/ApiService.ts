const baseUrl = ""

function buildConfig(config?: RequestInit) {
    return {
        ...config,
        headers: {
            "Context-Type": "application/json",
        },
    }
}

async function parseJson(res: Response) {
    const json = await res.json()
    return {
        status: res.status,
        statusText: res.statusText,
        json,
    }
}

async function makeRequest<DataType>(uri: string, config?: RequestInit) {
    const fetchRes = await fetch(baseUrl + uri, buildConfig(config))
    const res = await parseJson(fetchRes)

    if (res.status < 200 || res.status >= 300) {
        throw new Error(res.json.message)
    } else {
        return res.json as DataType
    }
}

export function doGet<DataType>(uri: string): Promise<DataType> {
    return makeRequest<DataType>(uri, {
        method: "GET",
    })
}

export function doPost<DataType>(uri: string, data: DataType): Promise<DataType> {
    return makeRequest<DataType>(uri, {
        method: "POST",
        body: JSON.stringify(data),
    })
}

export function doPut<DataType>(uri: string, data: DataType): Promise<DataType> {
    return makeRequest<DataType>(uri, {
        method: "PUT",
        body: JSON.stringify(data),
    })
}

export function doDelete<DataType>(uri: string): Promise<DataType> {
    return makeRequest<DataType>(uri, {
        method: "DELETE",
    })
}
