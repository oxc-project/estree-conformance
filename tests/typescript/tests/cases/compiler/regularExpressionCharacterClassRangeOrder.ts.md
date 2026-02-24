__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 322,
                    "end": 328
                  },
                  "typeArguments": null,
                  "start": 322,
                  "end": 328
                },
                "start": 322,
                "end": 330
              },
              "start": 320,
              "end": 330
            },
            "start": 313,
            "end": 330
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/",
                "regex": {
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]",
                  "flags": ""
                },
                "start": 336,
                "end": 352
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/u",
                "regex": {
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]",
                  "flags": "u"
                },
                "start": 355,
                "end": 372
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[𝘈-𝘡][𝘡-𝘈]/v",
                "regex": {
                  "pattern": "[𝘈-𝘡][𝘡-𝘈]",
                  "flags": "v"
                },
                "start": 375,
                "end": 392
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/",
                "regex": {
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]",
                  "flags": ""
                },
                "start": 396,
                "end": 440
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/u",
                "regex": {
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]",
                  "flags": "u"
                },
                "start": 443,
                "end": 488
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/v",
                "regex": {
                  "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]",
                  "flags": "v"
                },
                "start": 491,
                "end": 536
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/",
                "regex": {
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]",
                  "flags": ""
                },
                "start": 540,
                "end": 596
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/u",
                "regex": {
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]",
                  "flags": "u"
                },
                "start": 599,
                "end": 656
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/v",
                "regex": {
                  "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]",
                  "flags": "v"
                },
                "start": 659,
                "end": 716
              }
            ],
            "start": 333,
            "end": 719
          },
          "definite": false,
          "start": 313,
          "end": 719
        }
      ],
      "declare": false,
      "start": 307,
      "end": 720
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 307,
  "end": 720
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 307,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "regexes",
    "start": 313,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "RegularExpression",
    "value": "/[𝘈-𝘡][𝘡-𝘈]/",
    "regex": {
      "flags": "",
      "pattern": "[𝘈-𝘡][𝘡-𝘈]"
    },
    "start": 336,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 352,
    "end": 353
  },
  {
    "type": "RegularExpression",
    "value": "/[𝘈-𝘡][𝘡-𝘈]/u",
    "regex": {
      "flags": "u",
      "pattern": "[𝘈-𝘡][𝘡-𝘈]"
    },
    "start": 355,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "RegularExpression",
    "value": "/[𝘈-𝘡][𝘡-𝘈]/v",
    "regex": {
      "flags": "v",
      "pattern": "[𝘈-𝘡][𝘡-𝘈]"
    },
    "start": 375,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393
  },
  {
    "type": "RegularExpression",
    "value": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/",
    "regex": {
      "flags": "",
      "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
    },
    "start": 396,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "RegularExpression",
    "value": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/u",
    "regex": {
      "flags": "u",
      "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
    },
    "start": 443,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489
  },
  {
    "type": "RegularExpression",
    "value": "/[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]/v",
    "regex": {
      "flags": "v",
      "pattern": "[\\u{1D608}-\\u{1D621}][\\u{1D621}-\\u{1D608}]"
    },
    "start": 491,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 536,
    "end": 537
  },
  {
    "type": "RegularExpression",
    "value": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/",
    "regex": {
      "flags": "",
      "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
    },
    "start": 540,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 596,
    "end": 597
  },
  {
    "type": "RegularExpression",
    "value": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/u",
    "regex": {
      "flags": "u",
      "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
    },
    "start": 599,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 656,
    "end": 657
  },
  {
    "type": "RegularExpression",
    "value": "/[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]/v",
    "regex": {
      "flags": "v",
      "pattern": "[\\uD835\\uDE08-\\uD835\\uDE21][\\uD835\\uDE21-\\uD835\\uDE08]"
    },
    "start": 659,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 719,
    "end": 720
  }
]
```
