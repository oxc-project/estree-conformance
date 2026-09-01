__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makePoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 90
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 94,
              "end": 100
            },
            "start": 92,
            "end": 100
          },
          "start": 91,
          "end": 100
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 105,
              "end": 111
            },
            "start": 103,
            "end": 111
          },
          "start": 102,
          "end": 111
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 141
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "start": 158,
                          "end": 167
                        }
                      ],
                      "start": 144,
                      "end": 177
                    },
                    "expression": false,
                    "start": 141,
                    "end": 177
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 136,
                  "end": 177
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 216,
                            "end": 217
                          },
                          "start": 209,
                          "end": 218
                        }
                      ],
                      "start": 195,
                      "end": 228
                    },
                    "expression": false,
                    "start": 192,
                    "end": 228
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 187,
                  "end": 228
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dist",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 238,
                    "end": 242
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Math",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 277,
                                "end": 281
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "sqrt",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 286
                              },
                              "optional": false,
                              "computed": false,
                              "start": 277,
                              "end": 286
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 287,
                                    "end": 288
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 291,
                                    "end": 292
                                  },
                                  "start": 287,
                                  "end": 292
                                },
                                "operator": "+",
                                "right": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 295,
                                    "end": 296
                                  },
                                  "operator": "*",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 299,
                                    "end": 300
                                  },
                                  "start": 295,
                                  "end": 300
                                },
                                "start": 287,
                                "end": 300
                              }
                            ],
                            "optional": false,
                            "start": 277,
                            "end": 301
                          },
                          "start": 270,
                          "end": 302
                        }
                      ],
                      "start": 256,
                      "end": 312
                    },
                    "expression": false,
                    "start": 244,
                    "end": 312
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 238,
                  "end": 312
                }
              ],
              "start": 126,
              "end": 318
            },
            "start": 119,
            "end": 318
          }
        ],
        "start": 113,
        "end": 320
      },
      "expression": false,
      "start": 72,
      "end": 320
    },
    {
      "type": "EmptyStatement",
      "start": 320,
      "end": 321
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 72,
  "end": 321
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 72,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "makePoint",
    "start": 81,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 136,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 158,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 209,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "dist",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 244,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "sqrt",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 317,
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
