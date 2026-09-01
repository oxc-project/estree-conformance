__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TFirstArgs",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11,
                    "end": 21
                  },
                  "constraint": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 30,
                      "end": 33
                    },
                    "start": 30,
                    "end": 35
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 11,
                  "end": 35
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLastArg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 45
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 45
                }
              ],
              "start": 10,
              "end": 46
            },
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
                  "start": 50,
                  "end": 54
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TFirstArgs",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 60,
                            "end": 70
                          },
                          "typeArguments": null,
                          "start": 60,
                          "end": 70
                        },
                        "start": 57,
                        "end": 70
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TLastArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 80
                        },
                        "typeArguments": null,
                        "start": 72,
                        "end": 80
                      }
                    ],
                    "start": 56,
                    "end": 81
                  },
                  "start": 54,
                  "end": 81
                },
                "value": null,
                "start": 47,
                "end": 81
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 84,
                "end": 88
              },
              "start": 82,
              "end": 88
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 92,
              "end": 94
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 94
          },
          "definite": false,
          "start": 6,
          "end": 94
        }
      ],
      "declare": false,
      "start": 0,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 95
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "TFirstArgs",
    "start": 11,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 22,
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
    "value": "[",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "TLastArg",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 47,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 57,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "TFirstArgs",
    "start": 60,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "TLastArg",
    "start": 72,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 89,
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
    "value": ";",
    "start": 94,
    "end": 95
  }
]
```
