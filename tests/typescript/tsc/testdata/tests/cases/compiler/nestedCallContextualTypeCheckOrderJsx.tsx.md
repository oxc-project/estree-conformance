__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 121
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 145
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 146,
              "end": 148
            },
            "declare": false,
            "start": 128,
            "end": 148
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 180
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 181,
              "end": 183
            },
            "declare": false,
            "start": 153,
            "end": 183
          }
        ],
        "start": 122,
        "end": 185
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 100,
      "end": 185
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 210
          }
        ],
        "start": 208,
        "end": 211
      },
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 223
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 229,
                                "end": 230
                              },
                              "typeArguments": null,
                              "start": 229,
                              "end": 230
                            },
                            "start": 227,
                            "end": 230
                          },
                          "start": 226,
                          "end": 230
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 235,
                          "end": 239
                        },
                        "start": 232,
                        "end": 239
                      },
                      "start": 225,
                      "end": 239
                    },
                    "start": 223,
                    "end": 239
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 221,
                  "end": 240
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 244,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 244,
                      "end": 245
                    },
                    "start": 242,
                    "end": 245
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 241,
                  "end": 245
                }
              ],
              "start": 219,
              "end": 247
            },
            "start": 217,
            "end": 247
          },
          "start": 212,
          "end": 247
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 253
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 261
            },
            "start": 250,
            "end": 261
          },
          "typeArguments": null,
          "start": 250,
          "end": 261
        },
        "start": 248,
        "end": 261
      },
      "body": null,
      "expression": false,
      "start": 186,
      "end": 262
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 284
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 285,
            "end": 286
          }
        ],
        "start": 284,
        "end": 287
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 292
              },
              "typeArguments": null,
              "start": 291,
              "end": 292
            },
            "start": 289,
            "end": 292
          },
          "start": 288,
          "end": 292
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 295,
            "end": 296
          },
          "typeArguments": null,
          "start": 295,
          "end": 296
        },
        "start": 293,
        "end": 296
      },
      "body": null,
      "expression": false,
      "start": 263,
      "end": 297
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 305,
            "end": 306
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Outer",
                "start": 310,
                "end": 315
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "cb",
                    "start": 316,
                    "end": 318
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wrap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 320,
                        "end": 324
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                              "typeAnnotation": null,
                              "start": 326,
                              "end": 327
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 332,
                                "end": 333
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toFixed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 334,
                                "end": 341
                              },
                              "optional": false,
                              "computed": false,
                              "start": 332,
                              "end": 341
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 332,
                            "end": 343
                          },
                          "id": null,
                          "generator": false,
                          "start": 325,
                          "end": 343
                        }
                      ],
                      "optional": false,
                      "start": 320,
                      "end": 344
                    },
                    "start": 319,
                    "end": 345
                  },
                  "start": 316,
                  "end": 345
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "v",
                    "start": 346,
                    "end": 347
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 349,
                      "end": 350
                    },
                    "start": 348,
                    "end": 351
                  },
                  "start": 346,
                  "end": 351
                }
              ],
              "selfClosing": true,
              "start": 309,
              "end": 354
            },
            "children": [],
            "closingElement": null,
            "start": 309,
            "end": 354
          },
          "definite": false,
          "start": 305,
          "end": 354
        }
      ],
      "declare": false,
      "start": 299,
      "end": 355
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 363
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Outer",
                "start": 367,
                "end": 372
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 381
                        },
                        "value": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "wrap",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 383,
                            "end": 387
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
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
                                  "typeAnnotation": null,
                                  "start": 389,
                                  "end": 390
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 395,
                                    "end": 396
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toFixed",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 397,
                                    "end": 404
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 395,
                                  "end": 404
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 395,
                                "end": 406
                              },
                              "id": null,
                              "generator": false,
                              "start": 388,
                              "end": 406
                            }
                          ],
                          "optional": false,
                          "start": 383,
                          "end": 407
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 379,
                        "end": 407
                      }
                    ],
                    "start": 377,
                    "end": 409
                  },
                  "start": 373,
                  "end": 410
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "v",
                    "start": 411,
                    "end": 412
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 414,
                      "end": 415
                    },
                    "start": 413,
                    "end": 416
                  },
                  "start": 411,
                  "end": 416
                }
              ],
              "selfClosing": true,
              "start": 366,
              "end": 419
            },
            "children": [],
            "closingElement": null,
            "start": 366,
            "end": 419
          },
          "definite": false,
          "start": 362,
          "end": 419
        }
      ],
      "declare": false,
      "start": 356,
      "end": 420
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 420
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 100,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 128,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 138,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 153,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 163,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 186,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 194,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 203,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 212,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 221,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 232,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 235,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 254,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 271,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Keyword",
    "value": "const",
    "start": 299,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 309,
    "end": 310
  },
  {
    "type": "JSXIdentifier",
    "value": "Outer",
    "start": 310,
    "end": 315
  },
  {
    "type": "JSXIdentifier",
    "value": "cb",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 320,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 329,
    "end": 331
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "JSXIdentifier",
    "value": "toFixed",
    "start": 334,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "JSXIdentifier",
    "value": "v",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 356,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "JSXIdentifier",
    "value": "Outer",
    "start": 367,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 374,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 392,
    "end": 394
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 396,
    "end": 397
  },
  {
    "type": "JSXIdentifier",
    "value": "toFixed",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410
  },
  {
    "type": "JSXIdentifier",
    "value": "v",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420
  }
]
```
