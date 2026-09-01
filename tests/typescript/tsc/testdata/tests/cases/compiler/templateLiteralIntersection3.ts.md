__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Path",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 12,
            "end": 18
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
                  "name": "_pathBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 33
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 35,
                    "end": 38
                  },
                  "start": 33,
                  "end": 38
                },
                "accessibility": null,
                "static": false,
                "start": 23,
                "end": 38
              }
            ],
            "start": 21,
            "end": 40
          }
        ],
        "start": 12,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
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
            "name": "path",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Path",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 66
                },
                "typeArguments": null,
                "start": 62,
                "end": 66
              },
              "start": 60,
              "end": 66
            },
            "start": 56,
            "end": 66
          },
          "init": null,
          "definite": false,
          "start": 56,
          "end": 66
        }
      ],
      "declare": true,
      "start": 42,
      "end": 67
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
            "name": "options1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 99
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 101,
                            "end": 107
                          },
                          "start": 99,
                          "end": 107
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 95,
                        "end": 108
                      }
                    ],
                    "start": 93,
                    "end": 110
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 119,
                                "end": 125
                              },
                              "start": 117,
                              "end": 125
                            },
                            "start": 116,
                            "end": 125
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 128,
                            "end": 135
                          },
                          "start": 126,
                          "end": 135
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 115,
                        "end": 136
                      }
                    ],
                    "start": 113,
                    "end": 138
                  }
                ],
                "start": 93,
                "end": 138
              },
              "start": 91,
              "end": 138
            },
            "start": 83,
            "end": 138
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 138
        }
      ],
      "declare": true,
      "start": 69,
      "end": 139
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
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 149
          },
          "property": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo",
                  "cooked": "foo"
                },
                "tail": true,
                "start": 150,
                "end": 155
              }
            ],
            "expressions": [],
            "start": 150,
            "end": 155
          },
          "optional": false,
          "computed": true,
          "start": 141,
          "end": 156
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 159,
          "end": 164
        },
        "start": 141,
        "end": 164
      },
      "directive": null,
      "start": 141,
      "end": 165
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
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 167,
            "end": 175
          },
          "property": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "foo/",
                  "cooked": "foo/"
                },
                "tail": false,
                "start": 176,
                "end": 183
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 187,
                "end": 189
              }
            ],
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "path",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 187
              }
            ],
            "start": 176,
            "end": 189
          },
          "optional": false,
          "computed": true,
          "start": 167,
          "end": 190
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 193,
          "end": 198
        },
        "start": 167,
        "end": 198
      },
      "directive": null,
      "start": 167,
      "end": 199
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
            "name": "lowercasePath",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lowercase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 296
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo/",
                            "cooked": "foo/"
                          },
                          "tail": false,
                          "start": 297,
                          "end": 304
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 308,
                          "end": 310
                        }
                      ],
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Path",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 308
                          },
                          "typeArguments": null,
                          "start": 304,
                          "end": 308
                        }
                      ],
                      "start": 297,
                      "end": 310
                    }
                  ],
                  "start": 296,
                  "end": 311
                },
                "start": 287,
                "end": 311
              },
              "start": 285,
              "end": 311
            },
            "start": 272,
            "end": 311
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 311
        }
      ],
      "declare": true,
      "start": 258,
      "end": 312
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
            "name": "options1",
            "optional": false,
            "typeAnnotation": null,
            "start": 314,
            "end": 322
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "lowercasePath",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 336
          },
          "optional": false,
          "computed": true,
          "start": 314,
          "end": 337
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 340,
          "end": 345
        },
        "start": 314,
        "end": 345
      },
      "directive": null,
      "start": 314,
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
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "_pathBrand",
    "start": 23,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 56,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 69,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "options1",
    "start": 83,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "&",
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
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "options1",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 149,
    "end": 150
  },
  {
    "type": "Template",
    "value": "`foo`",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "options1",
    "start": 167,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Template",
    "value": "`foo/${",
    "start": 176,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 183,
    "end": 187
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 191,
    "end": 192
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 258,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 266,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "lowercasePath",
    "start": 272,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Lowercase",
    "start": 287,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "Template",
    "value": "`foo/${",
    "start": 297,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Path",
    "start": 304,
    "end": 308
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "options1",
    "start": 314,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "lowercasePath",
    "start": 323,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 340,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  }
]
```
