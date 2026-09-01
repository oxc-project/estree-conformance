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
            "name": "React",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              },
              "start": 17,
              "end": 22
            },
            "start": 12,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 22
        }
      ],
      "declare": true,
      "start": 0,
      "end": 23
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "View",
            "start": 25,
            "end": 29
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 24,
          "end": 30
        },
        "children": [
          {
            "type": "JSXText",
            "value": "\n    ",
            "raw": "\n    ",
            "start": 30,
            "end": 35
          },
          {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ListView",
                "start": 36,
                "end": 44
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "refreshControl",
                    "start": 45,
                    "end": 59
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXElement",
                      "openingElement": {
                        "type": "JSXOpeningElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "RefreshControl",
                          "start": 71,
                          "end": 85
                        },
                        "typeArguments": null,
                        "attributes": [
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "onRefresh",
                              "start": 86,
                              "end": 95
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 97,
                                "end": 97
                              },
                              "start": 96,
                              "end": 98
                            },
                            "start": 86,
                            "end": 98
                          },
                          {
                            "type": "JSXAttribute",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "refreshing",
                              "start": 99,
                              "end": 109
                            },
                            "value": {
                              "type": "JSXExpressionContainer",
                              "expression": {
                                "type": "JSXEmptyExpression",
                                "start": 111,
                                "end": 111
                              },
                              "start": 110,
                              "end": 112
                            },
                            "start": 99,
                            "end": 112
                          }
                        ],
                        "selfClosing": true,
                        "start": 70,
                        "end": 115
                      },
                      "children": [],
                      "closingElement": null,
                      "start": 70,
                      "end": 115
                    },
                    "start": 60,
                    "end": 121
                  },
                  "start": 45,
                  "end": 121
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "dataSource",
                    "start": 122,
                    "end": 132
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 144
                        },
                        "optional": false,
                        "computed": false,
                        "start": 134,
                        "end": 144
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ds",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 147
                      },
                      "optional": false,
                      "computed": false,
                      "start": 134,
                      "end": 147
                    },
                    "start": 133,
                    "end": 148
                  },
                  "start": 122,
                  "end": 148
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "renderRow",
                    "start": 149,
                    "end": 158
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "JSXEmptyExpression",
                      "start": 160,
                      "end": 160
                    },
                    "start": 159,
                    "end": 161
                  },
                  "start": 149,
                  "end": 161
                }
              ],
              "selfClosing": false,
              "start": 35,
              "end": 162
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 162,
                "end": 167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ListView",
                "start": 169,
                "end": 177
              },
              "start": 167,
              "end": 178
            },
            "start": 35,
            "end": 178
          },
          {
            "type": "JSXText",
            "value": "\n",
            "raw": "\n",
            "start": 178,
            "end": 179
          }
        ],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "View",
            "start": 181,
            "end": 185
          },
          "start": 179,
          "end": 186
        },
        "start": 24,
        "end": 186
      },
      "directive": null,
      "start": 24,
      "end": 186
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 186
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 12,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 24,
    "end": 25
  },
  {
    "type": "JSXIdentifier",
    "value": "View",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 30,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "JSXIdentifier",
    "value": "ListView",
    "start": 36,
    "end": 44
  },
  {
    "type": "JSXIdentifier",
    "value": "refreshControl",
    "start": 45,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "JSXIdentifier",
    "value": "RefreshControl",
    "start": 71,
    "end": 85
  },
  {
    "type": "JSXIdentifier",
    "value": "onRefresh",
    "start": 86,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "JSXIdentifier",
    "value": "refreshing",
    "start": 99,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "JSXIdentifier",
    "value": "dataSource",
    "start": 122,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139
  },
  {
    "type": "JSXIdentifier",
    "value": "state",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "JSXIdentifier",
    "value": "ds",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "JSXIdentifier",
    "value": "renderRow",
    "start": 149,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 168,
    "end": 169
  },
  {
    "type": "JSXIdentifier",
    "value": "ListView",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 180,
    "end": 181
  },
  {
    "type": "JSXIdentifier",
    "value": "View",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 185,
    "end": 186
  }
]
```
