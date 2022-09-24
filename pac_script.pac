function FindProxyForURL(url, host) {
 if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.com'))
    return 'PROXY 79.137.199.53:38209'
 if (isPlainHostName(host) || dnsDomainIs(host, 'highwebmedia.com'))
    return 'PROXY 79.137.199.53:38209'
 if (isPlainHostName(host) || dnsDomainIs(host, 'chaturbate.eu'))
    return 'PROXY 79.137.199.53:38209'
 if (isPlainHostName(host) || dnsDomainIs(host, '.myfreecams.com')) 
    return 'PROXY 79.137.199.53:38209'
 if (isPlainHostName(host) || dnsDomainIs(host, 'camsoda.com')) 
    return 'PROXY 79.137.199.53:38209'
 else 
    return 'DIRECT'
}
