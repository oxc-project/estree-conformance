__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FunctionComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 33
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "props",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 43,
                      "end": 44
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 46,
                        "end": 52
                      },
                      "start": 44,
                      "end": 52
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 43,
                    "end": 53
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 55,
                      "end": 63
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 54,
                    "end": 64
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 68,
                        "end": 74
                      },
                      "start": 66,
                      "end": 74
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 65,
                    "end": 75
                  }
                ],
                "start": 41,
                "end": 77
              },
              "start": 39,
              "end": 77
            },
            "start": 34,
            "end": 77
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 92,
                "end": 96
              },
              "start": 85,
              "end": 97
            }
          ],
          "start": 79,
          "end": 99
        },
        "expression": false,
        "start": 7,
        "end": 99
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 117
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 122
          },
          "optional": false,
          "computed": false,
          "start": 100,
          "end": 122
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "value": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 130,
                "end": 131
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 127,
              "end": 131
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "value": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 136,
                "end": 137
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 133,
              "end": 137
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "value": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 142,
                "end": 143
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 139,
              "end": 143
            }
          ],
          "start": 125,
          "end": 145
        },
        "start": 100,
        "end": 145
      },
      "directive": null,
      "start": 100,
      "end": 146
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 175
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 188,
                            "end": 189
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 191,
                              "end": 197
                            },
                            "start": 189,
                            "end": 197
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 188,
                          "end": 198
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 199,
                            "end": 200
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 202,
                              "end": 208
                            },
                            "start": 200,
                            "end": 208
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 199,
                          "end": 209
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 210,
                            "end": 211
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 213,
                              "end": 219
                            },
                            "start": 211,
                            "end": 219
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 210,
                          "end": 220
                        }
                      ],
                      "start": 186,
                      "end": 222
                    },
                    "start": 184,
                    "end": 222
                  },
                  "start": 179,
                  "end": 222
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 240,
                      "end": 244
                    },
                    "start": 233,
                    "end": 245
                  }
                ],
                "start": 227,
                "end": 247
              },
              "id": null,
              "generator": false,
              "start": 178,
              "end": 247
            },
            "definite": false,
            "start": 161,
            "end": 247
          }
        ],
        "declare": false,
        "start": 155,
        "end": 247
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 148,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 267
          },
          "optional": false,
          "computed": false,
          "start": 248,
          "end": 267
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 273
              },
              "value": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 275,
                "end": 276
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 272,
              "end": 276
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 279
              },
              "value": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 281,
                "end": 283
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 278,
              "end": 283
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "value": {
                "type": "Literal",
                "value": 13,
                "raw": "13",
                "start": 288,
                "end": 290
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 285,
              "end": 290
            }
          ],
          "start": 270,
          "end": 292
        },
        "start": 248,
        "end": 292
      },
      "directive": null,
      "start": 248,
      "end": 293
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 294
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 16,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Null",
    "value": "null",
    "start": 92,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 100,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 148,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 155,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 161,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 233,
    "end": 239
  },
  {
    "type": "Null",
    "value": "null",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 248,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 281,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 26
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 26
          },
          "importKind": "value",
          "start": 9,
          "end": 26
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 42
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 42
          },
          "importKind": "value",
          "start": 28,
          "end": 42
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component.js",
        "raw": "'./component.js'",
        "start": 50,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 96
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 116
          },
          "definite": false,
          "start": 74,
          "end": 116
        }
      ],
      "declare": false,
      "start": 68,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 143
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 160
          },
          "definite": false,
          "start": 124,
          "end": 160
        }
      ],
      "declare": false,
      "start": 118,
      "end": 161
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 197
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 197
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 180,
            "end": 197
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 213
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 213
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 199,
            "end": 213
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 237
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 237
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 215,
            "end": 237
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 258
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 258
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 239,
            "end": 258
          }
        ],
        "start": 178,
        "end": 260
      },
      "exportKind": "value",
      "start": 163,
      "end": 261
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 288
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 288
          },
          "exportKind": "value",
          "start": 271,
          "end": 288
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 304
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 304
          },
          "exportKind": "value",
          "start": 290,
          "end": 304
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 328
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 328
          },
          "exportKind": "value",
          "start": 306,
          "end": 328
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 349
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 349
          },
          "exportKind": "value",
          "start": 330,
          "end": 349
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 262,
      "end": 352
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 353
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 9,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 28,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "'./component.js'",
    "start": 50,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "FunctionComponentAlias",
    "start": 74,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 99,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "ArrowComponentAlias",
    "start": 124,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 146,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 180,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 199,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "FunctionComponentAlias",
    "start": 215,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ArrowComponentAlias",
    "start": 239,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 271,
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
    "value": "ArrowComponent",
    "start": 290,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "FunctionComponentAlias",
    "start": 306,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "ArrowComponentAlias",
    "start": 330,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 26
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 26
          },
          "importKind": "value",
          "start": 9,
          "end": 26
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 42
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 42
          },
          "importKind": "value",
          "start": 28,
          "end": 42
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component.js",
        "raw": "'./component.js'",
        "start": 50,
        "end": 66
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 66
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 96
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 116
          },
          "definite": false,
          "start": 74,
          "end": 116
        }
      ],
      "declare": false,
      "start": 68,
      "end": 117
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 143
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 160
          },
          "definite": false,
          "start": 124,
          "end": 160
        }
      ],
      "declare": false,
      "start": 118,
      "end": 161
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 197
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 197
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 180,
            "end": 197
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 213
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 213
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 199,
            "end": 213
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 237
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 237
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 215,
            "end": 237
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 258
            },
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowComponentAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 239,
              "end": 258
            },
            "method": false,
            "shorthand": true,
            "computed": false,
            "optional": false,
            "start": 239,
            "end": 258
          }
        ],
        "start": 178,
        "end": 260
      },
      "exportKind": "value",
      "start": 163,
      "end": 261
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 288
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 271,
            "end": 288
          },
          "exportKind": "value",
          "start": 271,
          "end": 288
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 304
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 304
          },
          "exportKind": "value",
          "start": 290,
          "end": 304
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 328
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 328
          },
          "exportKind": "value",
          "start": 306,
          "end": 328
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 349
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArrowComponentAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 349
          },
          "exportKind": "value",
          "start": 330,
          "end": 349
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 262,
      "end": 352
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 352
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 9,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 28,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "'./component.js'",
    "start": 50,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 68,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "FunctionComponentAlias",
    "start": 74,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 99,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "ArrowComponentAlias",
    "start": 124,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 146,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 163,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 180,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "ArrowComponent",
    "start": 199,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "FunctionComponentAlias",
    "start": 215,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ArrowComponentAlias",
    "start": 239,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "FunctionComponent",
    "start": 271,
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
    "value": "ArrowComponent",
    "start": 290,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "FunctionComponentAlias",
    "start": 306,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "ArrowComponentAlias",
    "start": 330,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  }
]
```
