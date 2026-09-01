__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Point",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 41,
                  "end": 47
                },
                "start": 39,
                "end": 47
              },
              "accessibility": null,
              "static": false,
              "start": 29,
              "end": 48
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 63
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 65,
                  "end": 71
                },
                "start": 63,
                "end": 71
              },
              "accessibility": null,
              "static": false,
              "start": 53,
              "end": 72
            }
          ],
          "start": 23,
          "end": 74
        },
        "declare": false,
        "start": 7,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 74
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Rect",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 97
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 113
                },
                "typeArguments": null,
                "start": 108,
                "end": 113
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 98,
              "end": 113
            }
          ],
          "start": 97,
          "end": 114
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 131
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 134
                  },
                  "typeArguments": null,
                  "start": 133,
                  "end": 134
                },
                "start": 131,
                "end": 134
              },
              "accessibility": null,
              "static": false,
              "start": 121,
              "end": 135
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 153
                  },
                  "typeArguments": null,
                  "start": 152,
                  "end": 153
                },
                "start": 150,
                "end": 153
              },
              "accessibility": null,
              "static": false,
              "start": 140,
              "end": 154
            }
          ],
          "start": 115,
          "end": 156
        },
        "declare": false,
        "start": 83,
        "end": 156
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 76,
      "end": 156
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
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 176
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
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
                      "start": 183,
                      "end": 189
                    },
                    "start": 181,
                    "end": 189
                  },
                  "start": 180,
                  "end": 189
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
                      "start": 194,
                      "end": 200
                    },
                    "start": 192,
                    "end": 200
                  },
                  "start": 191,
                  "end": 200
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 203,
                    "end": 208
                  },
                  "typeArguments": null,
                  "start": 203,
                  "end": 208
                },
                "start": 201,
                "end": 208
              },
              "body": {
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
                      "start": 215,
                      "end": 216
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 216
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 215,
                    "end": 216
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
                      "start": 218,
                      "end": 219
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 219
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 218,
                    "end": 219
                  }
                ],
                "start": 213,
                "end": 221
              },
              "id": null,
              "generator": false,
              "start": 179,
              "end": 222
            },
            "definite": false,
            "start": 171,
            "end": 222
          }
        ],
        "declare": false,
        "start": 165,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 158,
      "end": 223
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
              "name": "Rect",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 241
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 245,
                      "end": 246
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 255,
                        "end": 260
                      },
                      "typeArguments": null,
                      "start": 255,
                      "end": 260
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 245,
                    "end": 260
                  }
                ],
                "start": 244,
                "end": 261
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 266
                    },
                    "start": 263,
                    "end": 266
                  },
                  "start": 262,
                  "end": 266
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 272
                      },
                      "typeArguments": null,
                      "start": 271,
                      "end": 272
                    },
                    "start": 269,
                    "end": 272
                  },
                  "start": 268,
                  "end": 272
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Rect",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 279
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 280,
                          "end": 281
                        },
                        "typeArguments": null,
                        "start": 280,
                        "end": 281
                      }
                    ],
                    "start": 279,
                    "end": 282
                  },
                  "start": 275,
                  "end": 282
                },
                "start": 273,
                "end": 282
              },
              "body": {
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
                      "start": 289,
                      "end": 290
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 289,
                      "end": 290
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 289,
                    "end": 290
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
                      "start": 292,
                      "end": 293
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 293
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 292,
                    "end": 293
                  }
                ],
                "start": 287,
                "end": 295
              },
              "id": null,
              "generator": false,
              "start": 244,
              "end": 296
            },
            "definite": false,
            "start": 237,
            "end": 296
          }
        ],
        "declare": false,
        "start": 231,
        "end": 297
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 224,
      "end": 297
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
            "name": "Point",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 304
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zero",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 309
          },
          "optional": false,
          "computed": false,
          "start": 299,
          "end": 309
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 321
              },
              "typeArguments": null,
              "start": 316,
              "end": 321
            },
            "start": 314,
            "end": 321
          },
          "body": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 330
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 331,
                "end": 332
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 334,
                "end": 335
              }
            ],
            "optional": false,
            "start": 325,
            "end": 336
          },
          "id": null,
          "generator": false,
          "start": 312,
          "end": 336
        },
        "start": 299,
        "end": 336
      },
      "directive": null,
      "start": 299,
      "end": 337
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 337
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 53,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 76,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "Rect",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 121,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 158,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
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
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 224,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 231,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Rect",
    "start": 237,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 247,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 255,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "p",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Rect",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
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
    "value": "Point",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 305,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 322,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  }
]
```
