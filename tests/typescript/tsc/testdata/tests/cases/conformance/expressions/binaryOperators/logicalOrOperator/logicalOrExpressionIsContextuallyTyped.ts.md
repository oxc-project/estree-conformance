__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 267,
                      "end": 268
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 270,
                        "end": 276
                      },
                      "start": 268,
                      "end": 276
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 267,
                    "end": 276
                  }
                ],
                "start": 265,
                "end": 278
              },
              "start": 263,
              "end": 278
            },
            "start": 262,
            "end": 278
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 284
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 286,
                    "end": 288
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 283,
                  "end": 288
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 290,
                    "end": 291
                  },
                  "value": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 293,
                    "end": 296
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 290,
                  "end": 296
                }
              ],
              "start": 281,
              "end": 298
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 307,
                    "end": 309
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 304,
                  "end": 309
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 312
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 314,
                    "end": 318
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 311,
                  "end": 318
                }
              ],
              "start": 302,
              "end": 320
            },
            "start": 281,
            "end": 320
          },
          "definite": false,
          "start": 262,
          "end": 320
        }
      ],
      "declare": false,
      "start": 258,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 258,
  "end": 321
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 258,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 267,
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
    "value": "string",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "String",
    "value": "''",
    "start": 286,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "''",
    "start": 307,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  }
]
```
