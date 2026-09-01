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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 16
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 17,
            "end": 18
          }
        ],
        "start": 16,
        "end": 19
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
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
                    "name": "Iterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 36
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 37,
                          "end": 38
                        },
                        "typeArguments": null,
                        "start": 37,
                        "end": 38
                      }
                    ],
                    "start": 36,
                    "end": 39
                  },
                  "start": 28,
                  "end": 39
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncIterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 55
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 56,
                          "end": 57
                        },
                        "typeArguments": null,
                        "start": 56,
                        "end": 57
                      }
                    ],
                    "start": 55,
                    "end": 58
                  },
                  "start": 42,
                  "end": 58
                }
              ],
              "start": 28,
              "end": 58
            },
            "start": 26,
            "end": 58
          },
          "start": 20,
          "end": 58
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 84
                  },
                  "init": null,
                  "definite": false,
                  "start": 83,
                  "end": 84
                }
              ],
              "declare": false,
              "start": 77,
              "end": 84
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 94
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 96,
              "end": 103
            },
            "start": 66,
            "end": 103
          }
        ],
        "start": 60,
        "end": 105
      },
      "expression": false,
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
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 28,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 42,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 85,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 88,
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
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 104,
    "end": 105
  }
]
```
