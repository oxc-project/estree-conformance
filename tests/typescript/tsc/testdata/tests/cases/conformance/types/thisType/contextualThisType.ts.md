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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSThisType",
                        "start": 25,
                        "end": 29
                      },
                      "start": 23,
                      "end": 29
                    },
                    "start": 22,
                    "end": 29
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 34,
                    "end": 38
                  },
                  "start": 31,
                  "end": 38
                },
                "start": 21,
                "end": 38
              },
              "start": 19,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 39
          }
        ],
        "start": 12,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 54
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "typeArguments": null,
          "start": 63,
          "end": 64
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 65,
        "end": 68
      },
      "declare": false,
      "start": 43,
      "end": 68
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 78
                },
                "typeArguments": null,
                "start": 77,
                "end": 78
              },
              "start": 75,
              "end": 78
            },
            "start": 74,
            "end": 78
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 88
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
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 110
                        },
                        "start": 102,
                        "end": 111
                      }
                    ],
                    "start": 92,
                    "end": 117
                  },
                  "expression": false,
                  "start": 88,
                  "end": 117
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 87,
                "end": 117
              }
            ],
            "start": 81,
            "end": 119
          },
          "definite": false,
          "start": 74,
          "end": 119
        }
      ],
      "declare": false,
      "start": 70,
      "end": 119
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 126
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 129,
                "end": 130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "optional": false,
              "computed": false,
              "start": 129,
              "end": 132
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              }
            ],
            "optional": false,
            "start": 129,
            "end": 135
          },
          "definite": false,
          "start": 125,
          "end": 135
        }
      ],
      "declare": false,
      "start": 121,
      "end": 136
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 136
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
    "value": "X",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 43,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 55,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 102,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 121,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 135,
    "end": 136
  }
]
```
