// Chọn phần tử theo danh sách chỉ số.
// Mặc định oneBased=true => [1] lấy phần tử đầu tiên.
// Nếu unique=true sẽ loại bỏ trùng lặp ID nhập vào.
export function pickByIndex<T>(
  arr: T[],
  ids: number[],
  opts?: { oneBased?: boolean; unique?: boolean }
): T[] {
  const oneBased = opts?.oneBased ?? true;
  const unique = opts?.unique ?? true;

  const out: T[] = [];
  const seen = new Set<number>();

  for (const raw of ids) {
    const idx = (oneBased ? raw - 1 : raw) | 0; // ép số nguyên
    if (idx < 0 || idx >= arr.length) continue; // bỏ ID ngoài phạm vi
    if (unique && seen.has(idx)) continue;
    seen.add(idx);
    out.push(arr[idx]);
  }
  return out;
}
