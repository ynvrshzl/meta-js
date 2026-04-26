/**
 * Provides DOM specific interfaces. Such as querySelector and addEventListener
 */
export class DOM {
    
    /** 
     * 'Document query selector.' 
     */
    Select(AbstractQuerySelector){
        return document.querySelector(AbstractQuerySelector)
    }
}