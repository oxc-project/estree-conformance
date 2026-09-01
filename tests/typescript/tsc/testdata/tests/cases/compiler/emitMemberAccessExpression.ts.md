__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 61,
        "end": 73
      },
      "directive": "use strict",
      "start": 61,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 61,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 61,
        "end": 73
      },
      "directive": "use strict",
      "start": 61,
      "end": 74
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 94
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 107
          },
          "start": 85,
          "end": 107
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 113
        },
        "start": 85,
        "end": 113
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Person",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 140
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "populate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 166
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
                          "name": "raw",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 172,
                              "end": 175
                            },
                            "start": 170,
                            "end": 175
                          },
                          "start": 167,
                          "end": 175
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
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
                                  "name": "res",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 195,
                                  "end": 198
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Model",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 201,
                                    "end": 206
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "KnockoutExtentions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 207,
                                    "end": 225
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 201,
                                  "end": 225
                                },
                                "definite": false,
                                "start": 195,
                                "end": 225
                              }
                            ],
                            "declare": false,
                            "start": 191,
                            "end": 226
                          }
                        ],
                        "start": 177,
                        "end": 236
                      },
                      "expression": false,
                      "start": 166,
                      "end": 236
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 151,
                    "end": 236
                  }
                ],
                "start": 141,
                "end": 242
              },
              "abstract": false,
              "declare": false,
              "start": 127,
              "end": 242
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 120,
            "end": 242
          }
        ],
        "start": 114,
        "end": 244
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 75,
      "end": 244
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 245
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 61,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 75,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Microsoft",
    "start": 85,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "PeopleAtWork",
    "start": 95,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "_Person",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 151,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "populate",
    "start": 158,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "raw",
    "start": 167,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 172,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 191,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 195,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "KnockoutExtentions",
    "start": 207,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  }
]
```
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
            "name": "OData",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            },
            "start": 134,
            "end": 144
          },
          "init": null,
          "definite": false,
          "start": 134,
          "end": 144
        }
      ],
      "declare": true,
      "start": 122,
      "end": 145
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Microsoft",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 165
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "PeopleAtWork",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 178
          },
          "start": 156,
          "end": 178
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Model",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 184
        },
        "start": 156,
        "end": 184
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "KnockoutExtentions",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 222
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 223,
                "end": 230
              },
              "abstract": false,
              "declare": false,
              "start": 198,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 191,
            "end": 230
          }
        ],
        "start": 185,
        "end": 232
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 146,
      "end": 232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 122,
  "end": 232
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 122,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "OData",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 146,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Microsoft",
    "start": 156,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "PeopleAtWork",
    "start": 166,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Model",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "KnockoutExtentions",
    "start": 204,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  }
]
```
