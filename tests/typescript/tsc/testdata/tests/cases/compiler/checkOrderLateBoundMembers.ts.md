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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 233
          },
          "init": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 236,
            "end": 241
          },
          "definite": false,
          "start": 230,
          "end": 241
        }
      ],
      "declare": false,
      "start": 224,
      "end": 241
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 253
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
              "start": 265,
              "end": 268
            },
            "computed": true,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 273,
                "end": 279
              },
              "start": 271,
              "end": 279
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 260,
            "end": 280
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 288
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 290,
                "end": 296
              },
              "start": 288,
              "end": 296
            },
            "accessibility": null,
            "static": false,
            "start": 285,
            "end": 297
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 310
            },
            "computed": true,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 319,
                    "end": 325
                  },
                  "start": 317,
                  "end": 325
                },
                "start": 312,
                "end": 325
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 302,
            "end": 327
          }
        ],
        "start": 254,
        "end": 329
      },
      "declare": false,
      "start": 242,
      "end": 329
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 329
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 224,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 236,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 242,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 273,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 312,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 319,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  }
]
```
