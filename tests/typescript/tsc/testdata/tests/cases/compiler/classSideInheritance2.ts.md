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
        "name": "IText",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 25
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 34
          }
        ],
        "start": 16,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextSpan",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 57,
        "end": 59
      },
      "declare": false,
      "start": 38,
      "end": 59
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SubText",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 74
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 91
      },
      "superTypeArguments": null,
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 114
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IText",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 121,
                        "end": 126
                      },
                      "typeArguments": null,
                      "start": 121,
                      "end": 126
                    },
                    "start": 119,
                    "end": 126
                  },
                  "start": 115,
                  "end": 126
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "span",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TextSpan",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 134,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 134,
                      "end": 142
                    },
                    "start": 132,
                    "end": 142
                  },
                  "start": 128,
                  "end": 142
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 158,
                        "end": 163
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 158,
                      "end": 165
                    },
                    "directive": null,
                    "start": 158,
                    "end": 166
                  }
                ],
                "start": 144,
                "end": 176
              },
              "expression": false,
              "start": 114,
              "end": 176
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 103,
            "end": 176
          }
        ],
        "start": 92,
        "end": 178
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 178
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 194
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IText",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 211
          },
          "typeArguments": null,
          "start": 206,
          "end": 211
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 234,
                "end": 240
              },
              "start": 232,
              "end": 240
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 222,
            "end": 241
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subText",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 264
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "span",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TextSpan",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 271,
                        "end": 279
                      },
                      "typeArguments": null,
                      "start": 271,
                      "end": 279
                    },
                    "start": 269,
                    "end": 279
                  },
                  "start": 265,
                  "end": 279
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IText",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 282,
                    "end": 287
                  },
                  "typeArguments": null,
                  "start": 282,
                  "end": 287
                },
                "start": 280,
                "end": 287
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SubText",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 321
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 322,
                          "end": 326
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "span",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 328,
                          "end": 332
                        }
                      ],
                      "start": 310,
                      "end": 333
                    },
                    "start": 303,
                    "end": 334
                  }
                ],
                "start": 288,
                "end": 344
              },
              "expression": false,
              "start": 264,
              "end": 344
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 250,
            "end": 344
          }
        ],
        "start": 212,
        "end": 346
      },
      "abstract": false,
      "declare": false,
      "start": 180,
      "end": 346
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 346
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IText",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "TextSpan",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "SubText",
    "start": 67,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 75,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "TextBase",
    "start": 83,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 103,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "IText",
    "start": 121,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "TextSpan",
    "start": 134,
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
    "value": "super",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "TextBase",
    "start": 186,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 195,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "IText",
    "start": 206,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 222,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 229,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 250,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "subText",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 265,
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
    "value": "TextSpan",
    "start": 271,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "IText",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "SubText",
    "start": 314,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 328,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  }
]
```
