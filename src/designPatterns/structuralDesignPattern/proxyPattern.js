class GeoCoder {
    static ADDRESSES = [
        {
            name: "Amsterdam",
            latLng: "52.3700° N, 4.8900° E"
        },
        {
            name: "London",
            latLng: "51.5171° N, 0.1062° W"
        },
        {
            name: "Paris",
            latLng: "48.8742° N, 2.3470° E"
        },
        {
            name: "Berlin",
            latLng: "52.5233° N, 13.4127° E"
        }
    ]

    getLatLng(address) {
        console.log("Get from server")
        return GeoCoder.ADDRESSES.filter(add => add.name === address)[0]
    }
}

class ProxyGeoCoder {
    constructor() {
        this.cache = []
        this.GeoCoder = new GeoCoder()
    }

    getLatLng(address) {
        const cachedData = this.cache.filter(cachedAddress => cachedAddress.name === address)[0]

        if (cachedData) {
            console.log("Get from cache")
            return cachedData
        }

        const data = this.GeoCoder.getLatLng(address)
        this.cache.push(data)

        return data
    }
}

// Location
const location = "Paris"

const Proxy = new ProxyGeoCoder()

const firstResult = Proxy.getLatLng(location)
console.log(firstResult)

const secondResult = Proxy.getLatLng(location)
console.log(secondResult)