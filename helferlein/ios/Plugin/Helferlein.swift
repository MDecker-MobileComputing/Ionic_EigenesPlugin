import Foundation

@objc public class Helferlein: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
