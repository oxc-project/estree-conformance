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
            "name": "greeter",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
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
                "name": "person",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  },
                  "start": 30,
                  "end": 38
                },
                "start": 24,
                "end": 38
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 49,
                    "end": 55
                  },
                  "start": 47,
                  "end": 55
                },
                "start": 40,
                "end": 55
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
                        "name": "unused",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 73
                      },
                      "init": {
                        "type": "Literal",
                        "value": 20,
                        "raw": "20",
                        "start": 76,
                        "end": 78
                      },
                      "definite": false,
                      "start": 67,
                      "end": 78
                    }
                  ],
                  "declare": false,
                  "start": 63,
                  "end": 79
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "maker",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 93
                      },
                      "init": {
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
                            "name": "child",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 113,
                                "end": 119
                              },
                              "start": 111,
                              "end": 119
                            },
                            "start": 106,
                            "end": 119
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 122,
                            "end": 126
                          },
                          "start": 120,
                          "end": 126
                        },
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
                                    "name": "unused2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 141,
                                    "end": 148
                                  },
                                  "init": {
                                    "type": "Literal",
                                    "value": 22,
                                    "raw": "22",
                                    "start": 151,
                                    "end": 153
                                  },
                                  "definite": false,
                                  "start": 141,
                                  "end": 153
                                }
                              ],
                              "declare": false,
                              "start": 137,
                              "end": 154
                            }
                          ],
                          "start": 127,
                          "end": 160
                        },
                        "expression": false,
                        "start": 96,
                        "end": 160
                      },
                      "definite": false,
                      "start": 88,
                      "end": 160
                    }
                  ],
                  "declare": false,
                  "start": 84,
                  "end": 160
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "person2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 172
                    },
                    "right": {
                      "type": "Literal",
                      "value": "dummy value",
                      "raw": "\"dummy value\"",
                      "start": 175,
                      "end": 188
                    },
                    "start": 165,
                    "end": 188
                  },
                  "directive": null,
                  "start": 165,
                  "end": 189
                }
              ],
              "start": 57,
              "end": 191
            },
            "expression": false,
            "start": 14,
            "end": 191
          },
          "definite": false,
          "start": 4,
          "end": 191
        }
      ],
      "declare": false,
      "start": 0,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "greeter",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "person2",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "unused",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "20",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "maker",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 96,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 106,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "unused2",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Numeric",
    "value": "22",
    "start": 151,
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
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "person2",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "String",
    "value": "\"dummy value\"",
    "start": 175,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  }
]
```
