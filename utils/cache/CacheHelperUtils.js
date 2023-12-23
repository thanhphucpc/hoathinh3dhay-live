const myCache = new Map();

class CacheHelperUtils {

    // Lưu dữ liệu vào cache với thông tin thời gian
    static saveToCache(key, value) {
        const timestamp = new Date().getTime();
        myCache.set(key, { value: value, timestamp });
    }

    // Lấy dữ liệu từ cache và kiểm tra thời gian
    static getFromCache(key, maxAgeInSec) {
        const entry = myCache.get(key);

        if (entry) {
            const { value, timestamp } = entry;
            const currentTime = new Date().getTime();
            const age = (currentTime - timestamp) / 1000;

            if (age <= maxAgeInSec) {
                return value; // Dữ liệu còn hiệu lực
            } else {
                console.log("cache het han");
                myCache.delete(key); // Hết hạn, xóa khỏi cache
            }
        } else {
            console.log("cache khong co");
        }

        return null; // Không tìm thấy hoặc hết hạn
    }

}

module.exports = CacheHelperUtils


