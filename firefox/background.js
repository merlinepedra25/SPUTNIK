// create a context menu
/*
 * IPs
 */
browser.contextMenus.create({
    id: "IP",
    title: "IP",
    contexts: ["selection", "link", "image", "video", "audio"]
});

browser.contextMenus.create({
    id: "AbuseIPDB",
    title: "AbuseIPDB",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/abuseipdb_48.png"
    }
});

browser.contextMenus.create({
    id: "Alien IP",
    title: "AlienVault OTX",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/alien_48.png"
    }
});

browser.contextMenus.create({
    id: "ARIN IP",
    title: "ARIN",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/arin_48.png"
    }
});

browser.contextMenus.create({
    id: "Bad Packets IP",
    title: "Bad Packets",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/badpackets_48.png"
    }
});

browser.contextMenus.create({
    id: "Censys IP",
    title: "Censys",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/censys_48.png"
    }
});

browser.contextMenus.create({
    id: "FortiGuard IP",
    title: "FortiGuard",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/fortiguard_48.png"
    }
});

browser.contextMenus.create({
    id: "GreyNoise IP",
    title: "GreyNoise",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/greynoise_48.png"
    }
});

browser.contextMenus.create({
    id: "HackerTarget Reverse IP",
    title: "HackerTarget",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/hackertarget_48.png"
    }
});

browser.contextMenus.create({
    id: "IPinfo IP",
    title: "IPinfo",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/ipinfo_48.png"
    }
});

browser.contextMenus.create({
    id: "IP Quality Score",
    title: "IP Quality Score",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/ipqualityscore_48.png"
    }
});

browser.contextMenus.create({
    id: "IPVoid IP",
    title: "IPVoid",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/ipvoid_48.png"
    }
});

browser.contextMenus.create({
    id: "MX Toolbox ARIN IP",
    title: "MX Toolbox",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/mxtoolbox_48.png"
    }
});

browser.contextMenus.create({
    id: "Pulsedive IP",
    title: "Pulsedive",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/pulse_48.png"
    }
});

browser.contextMenus.create({
    id: "SecurityTrails IP",
    title: "SecurityTrails",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/securitytrails_48.png"
    }
});

browser.contextMenus.create({
    id: "Shodan IP",
    title: "Shodan",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/shodan_48.png"
    }
});

browser.contextMenus.create({
    id: "Spyse IP",
    title: "Spyse",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/spyse_48.png"
    }
});

browser.contextMenus.create({
    id: "Talos IP",
    title: "Talos",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/talos_48.png"
    }
});

browser.contextMenus.create({
    id: "ThreatCrowd IP",
    title: "ThreatCrowd",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/threatcrowd_48.png"
    }
});

browser.contextMenus.create({
    id: "ThreatMiner IP",
    title: "ThreatMiner",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/threatminer_48.png"
    }
});

browser.contextMenus.create({
    id: "TOR IP",
    title: "TOR Relay",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/tor_48.png"
    }
});

browser.contextMenus.create({
    id: "URLhaus IP",
    title: "URLhaus",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/urlhaus_48.png"
    }
});

browser.contextMenus.create({
    id: "VT IP",
    title: "VirusTotal",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/vt_48.png"
    }
});

browser.contextMenus.create({
    id: "X-Force IP",
    title: "X-Force",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "IP",
    icons: {
        "48": "icons/xforce_48.png"
    }
});

/*
 * Domains
 */
browser.contextMenus.create({
    id: "Domain",
    title: "Domain",
    contexts: ["selection", "link", "image", "video", "audio"]
});

browser.contextMenus.create({
    id: "Alexa Domain",
    title: "Alexa",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/alexa_48.png"
    }
});

browser.contextMenus.create({
    id: "BlueCoat Domain",
    title: "BlueCoat",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/bluecoat_48.png"
    }
});

browser.contextMenus.create({
    id: "Censys Domain",
    title: "Censys",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/censys_48.png"
    }
});

browser.contextMenus.create({
    id: "FortiGuard Domain",
    title: "FortiGuard",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/fortiguard_48.png"
    }
});

browser.contextMenus.create({
    id: "host.io Domain",
    title: "host.io",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/hostio_48.png"
    }
});

browser.contextMenus.create({
    id: "MX Toolbox Domain",
    title: "MX Toolbox",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/mxtoolbox_48.png"
    }
});

browser.contextMenus.create({
    id: "Pulsedive Domain",
    title: "Pulsedive",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/pulse_48.png"
    }
});

browser.contextMenus.create({
    id: "SecurityTrails Domain",
    title: "SecurityTrails",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/securitytrails_48.png"
    }
});

browser.contextMenus.create({
    id: "Shodan Domain",
    title: "Shodan",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/shodan_48.png"
    }
});

browser.contextMenus.create({
    id: "Spyse Domain",
    title: "Spyse",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/spyse_48.png"
    }
});

browser.contextMenus.create({
    id: "Talos Domain",
    title: "Talos",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/talos_48.png"
    }
});

browser.contextMenus.create({
    id: "ThreatCrowd Domain",
    title: "ThreatCrowd",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/threatcrowd_48.png"
    }
});

browser.contextMenus.create({
    id: "ThreatMiner Domain",
    title: "ThreatMiner",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/threatminer_48.png"
    }
});

browser.contextMenus.create({
    id: "TOR Domain",
    title: "TOR Relay",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/tor_48.png"
    }
});

browser.contextMenus.create({
    id: "URLhaus Domain",
    title: "URLhaus",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/urlhaus_48.png"
    }
});

browser.contextMenus.create({
    id: "VT Domain",
    title: "VirusTotal",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/vt_48.png"
    }
});

browser.contextMenus.create({
    id: "X-Force Domain",
    title: "X-Force",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "Domain",
    icons: {
        "48": "icons/xforce_48.png"
    }
});

/*
 * Hashes
 */
browser.contextMenus.create({
    id: "Hash",
    title: "Hash",
    contexts: ["selection"]
});

browser.contextMenus.create({
    id: "Alien Hash",
    title: "AlienVault OTX",
    contexts: ["selection"],
    parentId: "Hash",
    icons: {
        "48": "icons/alien_48.png"
    }
});

browser.contextMenus.create({
    id: "Hybrid Hash",
    title: "Hybrid Analysis",
    contexts: ["selection"],
    parentId: "Hash",
    icons: {
        "48": "icons/hybrid_48.png"
    }
});

browser.contextMenus.create({
    id: "Talos Hash",
    title: "Talos",
    contexts: ["selection"],
    parentId: "Hash",
    icons: {
        "48": "icons/talos_48.png"
    }
});

browser.contextMenus.create({
    id: "ThreatMiner Hash",
    title: "ThreatMiner",
    contexts: ["selection"],
    parentId: "Hash",
    icons: {
        "48": "icons/threatminer_48.png"
    }
});

browser.contextMenus.create({
    id: "URLhaus Hash",
    title: "URLhaus",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "hash",
    icons: {
        "48": "icons/urlhaus_48.png"
    }
});

browser.contextMenus.create({
    id: "VT Hash",
    title: "VirusTotal",
    contexts: ["selection"],
    parentId: "Hash",
    icons: {
        "48": "icons/vt_48.png"
    }
});

browser.contextMenus.create({
    id: "X-Force Hash",
    title: "X-Force",
    contexts: ["selection"],
    parentId: "Hash",
    icons: {
        "48": "icons/xforce_48.png"
    }
});

/*
 * URLs
 */
browser.contextMenus.create({
    id: "URL",
    title: "URL",
    contexts: ["selection", "link", "image", "video", "audio"]
});

browser.contextMenus.create({
    id: "Any.Run",
    title: "Any.Run",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/anyrun_48.png"
    }
});

browser.contextMenus.create({
    id: "BlueCoat URL",
    title: "BlueCoat",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/bluecoat_48.png"
    }
});

browser.contextMenus.create({
    id: "HackerTarget",
    title: "Extract Links",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/hackertarget_48.png"
    }
});

browser.contextMenus.create({
    id: "FortiGuard URL",
    title: "FortiGuard",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/fortiguard_48.png"
    }
});

browser.contextMenus.create({
    id: "TrendMicro URL",
    title: "TrendMicro",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/trendmicro_48.png"
    }
});

browser.contextMenus.create({
    id: "URLhaus URL",
    title: "URLhaus",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/urlhaus_48.png"
    }
});

browser.contextMenus.create({
    id: "urlscan",
    title: "urlscan",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/urlscan_48.png"
    }
});

browser.contextMenus.create({
    id: "VT URL",
    title: "VirusTotal",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/vt_48.png"
    }
});

browser.contextMenus.create({
    id: "X-Force URL",
    title: "X-Force",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/xforce_48.png"
    }
});

browser.contextMenus.create({
    id: "zscaler",
    title: "Zscaler",
    contexts: ["selection", "link", "image", "video", "audio"],
    parentId: "URL",
    icons: {
        "48": "icons/zscaler_48.png"
    }
});

// create empty url variable
var url = "";

//create empty artifact variable
var artifact = "";

function sanitizeArtifact(artifact) {
    while(artifact.includes("[.]")) {
        artifact = artifact.replace("[.]", ".");
    }

    if(artifact.includes("hxxp://")) {
        artifact = artifact.replace("hxxp://", "http://");
    }

    if(artifact.includes("hxxps://")) {
        artifact = artifact.replace("hxxps://", "https://");
    }
    return artifact;
}

/*
 * The click event listener: 
 * where we perform the approprate action 
 * given the ID of the menu item that was clicked
 */

browser.contextMenus.onClicked.addListener((info, tab) => {
    // strip leading and trailing spaces
    if (info.selectionText) {
        artifact = String(info.selectionText).trim();
    } else if (info.linkUrl) {
        var link = new URL(info.linkUrl);
        artifact = link.host;
    } else if (info.srcUrl) {
        var src = new URL(info.srcUrl);
        artifact = src.host;
    }
    // will copy the selection to clipboard after switch statement

    // unsanitize artifact if it is secured against clicking
    artifact = sanitizeArtifact(artifact);

    switch (info.menuItemId) {
            /*
             * IPs
             */
            case "AbuseIPDB":
                url = "https://www.abuseipdb.com/check/"+artifact;
                break;
            case "Alien IP":
                url = "https://otx.alienvault.com/indicator/ip/"+artifact;
                break;
            case "ARIN IP":
                url = "https://search.arin.net/rdap/?query="+artifact;
                break;
            case "Bad Packets IP":
                url = "https://mirai.badpackets.net/?source_ip_address="+artifact;
                break;
            case "Censys IP":
                url = "https://censys.io/ipv4/"+artifact;
                break;
            case "FortiGuard IP":
                url = "https://fortiguard.com/search?q="+artifact+"&engine=8";
                break;
            case "GreyNoise IP":
                url = "https://viz.greynoise.io/ip/"+artifact;
                break;
            case "HackerTarget Reverse IP":
                url = "https://api.hackertarget.com/reverseiplookup/?q="+artifact;
                break;
            case "IPinfo IP":
                url = "https://ipinfo.io/"+artifact;
                break;
            case "IP Quality Score":
                url = "https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/lookup/"+artifact;
                break;
            case "IPVoid IP":
                url = "https://www.ipvoid.com/";
                break;
            case "MX Toolbox ARIN IP":
                url = "https://www.mxtoolbox.com/SuperTool.aspx?action=arin%3a"+artifact;
                break;
            case "Pulsedive IP":
                url = "https://pulsedive.com/indicator/?ioc="+window.btoa(artifact); // btoa() = base64 encode
                break;
            case "SecurityTrails IP":
                url = "https://securitytrails.com/list/ip/"+artifact;
                break;
            case "Shodan IP":
                url = "https://www.shodan.io/host/"+artifact;
                break;
            case "Spyse IP":
                url = "https://spyse.com/target/ip/"+artifact;
                break;
            case "Talos IP":
                url = "https://talosintelligence.com/reputation_center/lookup?search="+artifact;
                break;
            case "ThreatCrowd IP":
                url = "https://www.threatcrowd.org/pivot.php?data="+artifact;
                break;
            case "ThreatMiner IP":
                url = "https://www.threatminer.org/host.php?q="+artifact;
                break;
            case "TOR IP":
                url = "https://metrics.torproject.org/rs.html#search/"+artifact;
                break;
            case "URLhaus IP":
                url = "https://urlhaus.abuse.ch/browse.php?search="+artifact;
                break;
            case "VT IP":
                url = "https://www.virustotal.com/#/ip-address/"+artifact;
                break;
            case "X-Force IP":
                url = "https://exchange.xforce.ibmcloud.com/ip/"+artifact;
                break;
            /*
             * Domains
             */
            case "Alexa Domain":
                url = "https://www.alexa.com/siteinfo/"+artifact;
                break;
            case "BlueCoat Domain":
                url = "https://sitereview.bluecoat.com/#/lookup-result/"+artifact;
                break;
            case "Censys Domain":
                url = "https://censys.io/domain?q="+artifact;
                break;
            case "FortiGuard Domain":
                url = "https://fortiguard.com/search?q="+artifact+"&engine=1";
                break;
            case "host.io Domain":
                url = "https://host.io/"+artifact;
                break;
            case "MX Toolbox Domain":
                url = "https://mxtoolbox.com/SuperTool.aspx?action=mx%3a"+artifact+"&run=toolpage";
                break;
            case "Pulsedive Domain":
                url = "https://pulsedive.com/indicator/?ioc="+window.btoa(artifact); // btoa() = base64 encode
                break;
            case "SecurityTrails Domain":
                url = "https://securitytrails.com/domain/"+artifact+"/dns";
                break;
            case "Shodan Domain":
                url = "https://www.shodan.io/search?query="+artifact;
                break;
            case "Spyse Domain":
                url = "https://spyse.com/target/domain/"+artifact;
                break;
            case "Talos Domain":
                url = "https://talosintelligence.com/reputation_center/lookup?search="+artifact;
                break;
            case "ThreatCrowd Domain":
                url = "https://www.threatcrowd.org/pivot.php?data="+artifact;
                break;
            case "ThreatMiner Domain":
                url = "https://www.threatminer.org/domain.php?q="+artifact;
                break;
            case "TOR Domain":
                url = "https://metrics.torproject.org/rs.html#search/"+artifact;
                break;
            case "URLhaus Domain":
                url = "https://urlhaus.abuse.ch/browse.php?search="+artifact;
                break;
            case "VT Domain":
                url = "https://virustotal.com/#/domain/"+artifact;
                break;
            case "X-Force Domain":
                url = "https://exchange.xforce.ibmcloud.com/url/"+artifact;
                break;
            /*
             * Hashes
             */
            case "Alien Hash":
                url = "https://otx.alienvault.com/indicator/file/"+artifact;
                break;
            case "Hybrid Hash":
                url = "https://www.hybrid-analysis.com/search?query="+artifact;
                break;
            case "Talos Hash":
                url = "https://talosintelligence.com/talos_file_reputation";
                break;
            case "ThreatMiner Hash":
                url = "https://www.threatminer.org/sample.php?q="+artifact;
                break;
            case "URLhaus Hash":
                url = "https://urlhaus.abuse.ch/browse.php?search="+artifact;
                break;
            case "VT Hash":
                url = "https://www.virustotal.com/#/file/"+artifact;
                break;
            case "X-Force Hash":
                url = "https://exchange.xforce.ibmcloud.com/malware/"+artifact;
                break;
            /*
             * URLs
             */
            case "Any.Run":
                url = "https://app.any.run/";
                break;
            case "BlueCoat URL":
                url = "https://sitereview.bluecoat.com/#/lookup-result/";
                break;
            case "FortiGuard URL":
                url = "https://fortiguard.com/search?q="+artifact+"&engine=7";
                break;
            case "HackerTarget":
                url = "https://hackertarget.com/extract-links/";
                break;
            case "TrendMicro URL":
                url = "https://global.sitesafety.trendmicro.com/";
                break;
            case "URLhaus URL":
                url = "https://urlhaus.abuse.ch/browse.php?search="+artifact;
                break;
            case "urlscan":
                url = "https://urlscan.io/";
                break;
            case "VT URL":
                url = "https://www.virustotal.com/#/home/url";
                break;
            case "X-Force URL":
                url = "https://exchange.xforce.ibmcloud.com/url/"+artifact;
                break;
            case "zscaler":
                url = "https://zulu.zscaler.com/";
                break;
    }
    browser.tabs.create({url});
    // copy the selection to clipboard
    navigator.clipboard.writeText(artifact);
});
