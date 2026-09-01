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
            "name": "fromDts",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 21
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "789n",
            "bigint": "789",
            "start": 24,
            "end": 28
          },
          "definite": false,
          "start": 14,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lib",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 69
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "999n",
                  "bigint": "999",
                  "start": 72,
                  "end": 76
                },
                "definite": false,
                "start": 64,
                "end": 76
              }
            ],
            "declare": false,
            "start": 58,
            "end": 77
          }
        ],
        "start": 52,
        "end": 79
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 30,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 80
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "fromDts",
    "start": 14,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Numeric",
    "value": "789n",
    "start": 24,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 30,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Lib",
    "start": 48,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 58,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 64,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Numeric",
    "value": "999n",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 43
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "123n",
            "bigint": "123",
            "start": 46,
            "end": 50
          },
          "definite": false,
          "start": 42,
          "end": 50
        }
      ],
      "declare": true,
      "start": 28,
      "end": 51
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
            "name": "regular",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 96
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "456n",
            "bigint": "456",
            "start": 99,
            "end": 103
          },
          "definite": false,
          "start": 89,
          "end": 103
        }
      ],
      "declare": false,
      "start": 83,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 28,
  "end": 104
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 28,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Numeric",
    "value": "123n",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "regular",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Numeric",
    "value": "456n",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  }
]
```
