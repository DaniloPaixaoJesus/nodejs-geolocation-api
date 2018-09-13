export class GeoLocation {
    lat: string
    lon: string
}

export class Vehicle {
    id: string
    identification: string
    name: string
    model: string
    brand: string
    category: string
    status: string
    geoLocation:GeoLocation
}
