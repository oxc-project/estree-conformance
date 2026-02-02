__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 91
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 104
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 106,
                      "end": 111
                    },
                    "start": 106,
                    "end": 111
                  },
                  "start": 104,
                  "end": 111
                },
                "accessibility": null,
                "static": false,
                "start": 96,
                "end": 111
              }
            ],
            "start": 94,
            "end": 113
          },
          {
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
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 141
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 143,
                      "end": 147
                    },
                    "start": 143,
                    "end": 147
                  },
                  "start": 141,
                  "end": 147
                },
                "accessibility": null,
                "static": false,
                "start": 133,
                "end": 148
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 155
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
                        "name": "newText",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 167,
                            "end": 173
                          },
                          "start": 165,
                          "end": 173
                        },
                        "start": 158,
                        "end": 173
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 178,
                        "end": 182
                      },
                      "start": 175,
                      "end": 182
                    },
                    "start": 157,
                    "end": 182
                  },
                  "start": 155,
                  "end": 182
                },
                "accessibility": null,
                "static": false,
                "start": 149,
                "end": 182
              }
            ],
            "start": 131,
            "end": 184
          }
        ],
        "start": 94,
        "end": 184
      },
      "declare": false,
      "start": 77,
      "end": 185
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 206
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 220
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 230
        },
        "optional": false,
        "computed": false,
        "start": 215,
        "end": 230
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TextProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 240
            },
            "typeArguments": null,
            "start": 231,
            "end": 240
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 242,
            "end": 244
          }
        ],
        "start": 230,
        "end": 245
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 258
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
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "span",
                          "start": 279,
                          "end": 283
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 278,
                        "end": 284
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "Some Text..",
                          "raw": "Some Text..",
                          "start": 284,
                          "end": 295
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "span",
                          "start": 297,
                          "end": 301
                        },
                        "start": 295,
                        "end": 302
                      },
                      "start": 278,
                      "end": 302
                    },
                    "start": 271,
                    "end": 303
                  }
                ],
                "start": 261,
                "end": 309
              },
              "expression": false,
              "start": 258,
              "end": 309
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 252,
            "end": 309
          }
        ],
        "start": 246,
        "end": 311
      },
      "abstract": false,
      "declare": false,
      "start": 187,
      "end": 311
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
            "name": "textPropsFalse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 350
                },
                "typeArguments": null,
                "start": 341,
                "end": 350
              },
              "start": 339,
              "end": 350
            },
            "start": 325,
            "end": 350
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 367
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 369,
                  "end": 374
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 359,
                "end": 374
              }
            ],
            "start": 353,
            "end": 376
          },
          "definite": false,
          "start": 325,
          "end": 376
        }
      ],
      "declare": false,
      "start": 319,
      "end": 377
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 383,
            "end": 385
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TextComponent",
                "start": 389,
                "end": 402
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "textPropsFalse",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 421
                  },
                  "start": 403,
                  "end": 422
                }
              ],
              "selfClosing": true,
              "start": 388,
              "end": 425
            },
            "children": [],
            "closingElement": null,
            "start": 388,
            "end": 425
          },
          "definite": false,
          "start": 383,
          "end": 425
        }
      ],
      "declare": false,
      "start": 379,
      "end": 425
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
            "name": "textPropsTrue",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 457
                },
                "typeArguments": null,
                "start": 448,
                "end": 457
              },
              "start": 446,
              "end": 457
            },
            "start": 433,
            "end": 457
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "editable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 474
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 476,
                  "end": 480
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 466,
                "end": 480
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onEdit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 486,
                  "end": 492
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 500,
                    "end": 502
                  },
                  "id": null,
                  "generator": false,
                  "start": 494,
                  "end": 502
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 486,
                "end": 502
              }
            ],
            "start": 460,
            "end": 504
          },
          "definite": false,
          "start": 433,
          "end": 504
        }
      ],
      "declare": false,
      "start": 427,
      "end": 505
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 513
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "TextComponent",
                "start": 517,
                "end": 530
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "textPropsTrue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 535,
                    "end": 548
                  },
                  "start": 531,
                  "end": 549
                }
              ],
              "selfClosing": true,
              "start": 516,
              "end": 552
            },
            "children": [],
            "closingElement": null,
            "start": 516,
            "end": 552
          },
          "definite": false,
          "start": 511,
          "end": 552
        }
      ],
      "declare": false,
      "start": 507,
      "end": 552
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 552
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 77,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "TextProps",
    "start": 82,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "editable",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "editable",
    "start": 133,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "onEdit",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "newText",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 175,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 187,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "TextComponent",
    "start": 193,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 207,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 221,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "TextProps",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 278,
    "end": 279
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 283,
    "end": 284
  },
  {
    "type": "JSXText",
    "value": "Some Text..",
    "start": 284,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 296,
    "end": 297
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 297,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "textPropsFalse",
    "start": 325,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "TextProps",
    "start": 341,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "editable",
    "start": 359,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "y1",
    "start": 383,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 388,
    "end": 389
  },
  {
    "type": "JSXIdentifier",
    "value": "TextComponent",
    "start": 389,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "textPropsFalse",
    "start": 407,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 427,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "textPropsTrue",
    "start": 433,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "TextProps",
    "start": 448,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "editable",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 476,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "onEdit",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 497,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 511,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 516,
    "end": 517
  },
  {
    "type": "JSXIdentifier",
    "value": "TextComponent",
    "start": 517,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "textPropsTrue",
    "start": 535,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  }
]
```
