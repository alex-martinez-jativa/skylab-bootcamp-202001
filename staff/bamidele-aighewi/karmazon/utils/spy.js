function spy(func, ctx) {
    return () => {
        console.log(func.name +  '(' + (function() {
            const args = ''

            for (let i = 0; i < arguments.length; i++) {
                args += arguments[i]
                
                if(i < arguments.length -1) args += ', '
            }

            return args
        }).apply(ctx, arguments) + ') {')

        const ret = func.apply(ctx, arguments)

        console.log('} ' + func.name + ' => ' + ret)
        
        return ret
    }
}