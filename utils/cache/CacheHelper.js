
export const myCache = new Map();

// Lưu dữ liệu vào cache với thông tin thời gian
export function saveToCache(key, value) {
    const timestamp = new Date().getTime();
    myCache.set(key, { value: value, timestamp });
}

// Lấy dữ liệu từ cache và kiểm tra thời gian
export function getFromCache(key, maxAgeInSec) {
    const entry = myCache.get(key);

    if (entry) {
        const { value, timestamp } = entry;
        const currentTime = new Date().getTime();
        const age = (currentTime - timestamp) / 1000;

        if (age <= maxAgeInSec) {
            return value; // Dữ liệu còn hiệu lực
        } else {
            myCache.delete(key); // Hết hạn, xóa khỏi cache
        }
    }

    return null; // Không tìm thấy hoặc hết hạn
}


