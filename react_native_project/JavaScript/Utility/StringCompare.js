const StringCompare = {
    isEquals: (s0, s1)=>{
        if (s0 == null || s1 == null)
            return false;
        return s0.localeCompare(s1) == 0;
    }
};

export default StringCompare;