function FindProxyForURL(url, host) {
 if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.com'))
    return 'PROXY 95.216.195.38:38237'
 if (isPlainHostName(host) || dnsDomainIs(host, 'highwebmedia.com'))
    return 'PROXY 95.216.195.38:38237'
 if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.eu'))
    return 'PROXY 95.216.195.38:38237'
 if (isPlainHostName(host) || dnsDomainIs(host, '.myfreecams.com')) 
    return 'PROXY 95.216.195.38:38237'
 if (isPlainHostName(host) || dnsDomainIs(host, '.camsoda.com')) 
    return 'PROXY 95.216.195.38:38237'
 else 
    return 'DIRECT'
}
