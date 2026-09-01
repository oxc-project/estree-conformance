__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 32,
                    "end": 38
                  },
                  "start": 30,
                  "end": 38
                },
                "start": 28,
                "end": 38
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 57
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 40,
                "end": 57
              }
            ],
            "returnType": null,
            "start": 27,
            "end": 59
          }
        ],
        "start": 21,
        "end": 87
      },
      "declare": false,
      "start": 8,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 107
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 119,
                    "end": 125
                  },
                  "start": 117,
                  "end": 125
                },
                "start": 115,
                "end": 125
              }
            ],
            "returnType": null,
            "start": 114,
            "end": 127
          }
        ],
        "start": 108,
        "end": 142
      },
      "declare": false,
      "start": 88,
      "end": 142
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 163
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 179,
                    "end": 185
                  },
                  "start": 177,
                  "end": 185
                },
                "start": 175,
                "end": 185
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 190,
                  "end": 204
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 187,
                "end": 204
              }
            ],
            "returnType": null,
            "start": 170,
            "end": 206
          }
        ],
        "start": 164,
        "end": 234
      },
      "declare": false,
      "start": 151,
      "end": 234
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i2NoError",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 254
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 270,
                    "end": 276
                  },
                  "start": 268,
                  "end": 276
                },
                "start": 266,
                "end": 276
              }
            ],
            "returnType": null,
            "start": 261,
            "end": 278
          }
        ],
        "start": 255,
        "end": 293
      },
      "declare": false,
      "start": 235,
      "end": 293
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null,
        "start": 315,
        "end": 317
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 327
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  },
                  "start": 331,
                  "end": 339
                },
                "start": 329,
                "end": 339
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 358
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 341,
                "end": 358
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 324,
            "end": 360
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 401
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "_i",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 407,
                    "end": 413
                  },
                  "start": 405,
                  "end": 413
                },
                "start": 403,
                "end": 413
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 391,
            "end": 415
          }
        ],
        "start": 318,
        "end": 430
      },
      "declare": false,
      "start": 305,
      "end": 430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 8,
  "end": 430
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 40,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 43,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "i1NoError",
    "start": 98,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 115,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 151,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 175,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 190,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 235,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "i2NoError",
    "start": 245,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 261,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 266,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 305,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 333,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 341,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "restParameters",
    "start": 344,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "fooNoError",
    "start": 391,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "_i",
    "start": 403,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 429,
    "end": 430
  }
]
```
