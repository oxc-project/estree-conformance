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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null,
                "start": 8,
                "end": 9
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "extend",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "optional": false,
              "computed": false,
              "start": 8,
              "end": 16
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "name": "workItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 20,
                        "end": 28
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 30,
                          "end": 33
                        },
                        "start": 28,
                        "end": 33
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 20,
                      "end": 33
                    }
                  ],
                  "start": 18,
                  "end": 35
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
                        "name": "workItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 39,
                        "end": 47
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 49,
                          "end": 52
                        },
                        "start": 47,
                        "end": 52
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 39,
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
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 54,
                        "end": 59
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 61,
                          "end": 67
                        },
                        "start": 59,
                        "end": 67
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 54,
                      "end": 67
                    }
                  ],
                  "start": 37,
                  "end": 69
                }
              ],
              "start": 16,
              "end": 70
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "workItem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 81
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 83,
                        "end": 87
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_workItem",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 88,
                        "end": 97
                      },
                      "optional": false,
                      "computed": false,
                      "start": 83,
                      "end": 97
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 73,
                    "end": 97
                  }
                ],
                "start": 71,
                "end": 99
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 101,
                "end": 103
              }
            ],
            "optional": false,
            "start": 8,
            "end": 104
          },
          "definite": false,
          "start": 4,
          "end": 104
        }
      ],
      "declare": false,
      "start": 0,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 105
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
    "value": "s",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "$",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "extend",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "workItem",
    "start": 20,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "workItem",
    "start": 39,
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
    "value": "any",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 54,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "workItem",
    "start": 73,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 83,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "_workItem",
    "start": 88,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  }
]
```
