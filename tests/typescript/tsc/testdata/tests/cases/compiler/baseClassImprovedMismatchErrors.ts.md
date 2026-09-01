__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 24
                    },
                    "typeArguments": null,
                    "start": 20,
                    "end": 24
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
                  }
                ],
                "start": 20,
                "end": 33
              },
              "start": 18,
              "end": 33
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 34
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 41
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
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 61,
                      "end": 63
                    },
                    "start": 54,
                    "end": 64
                  }
                ],
                "start": 44,
                "end": 70
              },
              "expression": false,
              "start": 41,
              "end": 70
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 39,
            "end": 70
          }
        ],
        "start": 11,
        "end": 72
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 86
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 99
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 116
                    },
                    "typeArguments": null,
                    "start": 109,
                    "end": 116
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  }
                ],
                "start": 109,
                "end": 125
              },
              "start": 107,
              "end": 125
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 106,
            "end": 126
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 133
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
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 153,
                        "end": 155
                      },
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 159,
                            "end": 165
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 168,
                            "end": 174
                          }
                        ],
                        "start": 159,
                        "end": 174
                      },
                      "start": 153,
                      "end": 174
                    },
                    "start": 146,
                    "end": 175
                  }
                ],
                "start": 136,
                "end": 181
              },
              "expression": false,
              "start": 133,
              "end": 181
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 131,
            "end": 181
          }
        ],
        "start": 100,
        "end": 183
      },
      "abstract": false,
      "declare": false,
      "start": 73,
      "end": 183
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DerivedInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 190,
        "end": 206
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
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "typeArguments": null,
          "start": 218,
          "end": 222
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DerivedInterface",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 232,
                      "end": 248
                    },
                    "typeArguments": null,
                    "start": 232,
                    "end": 248
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  }
                ],
                "start": 232,
                "end": 257
              },
              "start": 230,
              "end": 257
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 229,
            "end": 258
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 265
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
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 285,
                        "end": 287
                      },
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 291,
                            "end": 297
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 300,
                            "end": 306
                          }
                        ],
                        "start": 291,
                        "end": 306
                      },
                      "start": 285,
                      "end": 306
                    },
                    "start": 278,
                    "end": 307
                  }
                ],
                "start": 268,
                "end": 313
              },
              "expression": false,
              "start": 265,
              "end": 313
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 263,
            "end": 313
          }
        ],
        "start": 223,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 184,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
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
    "type": "Identifier",
    "value": "fn",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 54,
    "end": 60
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 79,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 87,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 146,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 153,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 156,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 184,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "DerivedInterface",
    "start": 190,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 207,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "DerivedInterface",
    "start": 232,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 251,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 263,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 285,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  }
]
```
