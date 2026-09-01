__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 27,
                "end": 34
              },
              "start": 27,
              "end": 36
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 36
          }
        ],
        "start": 13,
        "end": 37
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 45,
                    "end": 49
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 51,
                        "end": 55
                      },
                      "typeArguments": null,
                      "start": 51,
                      "end": 55
                    },
                    "start": 49,
                    "end": 55
                  },
                  "value": null,
                  "start": 42,
                  "end": 55
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 60,
                  "end": 64
                },
                "start": 57,
                "end": 64
              },
              "start": 41,
              "end": 64
            },
            "start": 39,
            "end": 64
          },
          "start": 38,
          "end": 64
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 66,
        "end": 68
      },
      "expression": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "wrap",
          "optional": false,
          "typeAnnotation": null,
          "start": 69,
          "end": 73
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cancelable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 87
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "cancelable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 87
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 77,
                      "end": 87
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 89
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 92,
                  "end": 94
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 94
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 99,
              "end": 101
            },
            "id": null,
            "generator": false,
            "start": 74,
            "end": 101
          }
        ],
        "optional": false,
        "start": 69,
        "end": 102
      },
      "directive": null,
      "start": 69,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 14,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 19,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 27,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 51,
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
    "value": "=>",
    "start": 57,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "wrap",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "cancelable",
    "start": 77,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  }
]
```
