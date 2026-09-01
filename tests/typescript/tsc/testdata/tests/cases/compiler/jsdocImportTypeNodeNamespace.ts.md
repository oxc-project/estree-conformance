__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 37
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "POINT",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 62,
                        "end": 68
                      },
                      "start": 60,
                      "end": 68
                    },
                    "start": 55,
                    "end": 68
                  },
                  "init": null,
                  "definite": false,
                  "start": 55,
                  "end": 68
                }
              ],
              "declare": false,
              "start": 49,
              "end": 69
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 42,
            "end": 69
          }
        ],
        "start": 38,
        "end": 71
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 11,
      "end": 71
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 95
      },
      "exportKind": "value",
      "start": 72,
      "end": 96
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 97
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 19,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 42,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "POINT",
    "start": 55,
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
    "value": "string",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 72,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 79,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "_default",
    "start": 87,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
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
                "value": "Point",
                "raw": "'Point'",
                "start": 90,
                "end": 97
              },
              "start": 31,
              "end": 99
            }
          ],
          "start": 27,
          "end": 101
        },
        "expression": false,
        "start": 15,
        "end": 101
      },
      "exportKind": "value",
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 101
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "'Point'",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  }
]
```
