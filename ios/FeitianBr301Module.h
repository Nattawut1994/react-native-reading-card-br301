#import <React/RCTBridgeModule.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTTurboModule.h>
#import <FeitianBr301ModuleSpec.h>

@interface FeitianBr301Module : NSObject <NativeFeitianBr301ModuleSpec>
#else
@interface FeitianBr301Module : NSObject <RCTBridgeModule>
#endif

@end
