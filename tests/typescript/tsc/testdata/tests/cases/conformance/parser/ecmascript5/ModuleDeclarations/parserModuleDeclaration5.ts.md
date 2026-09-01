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
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 37
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 64
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 65,
                    "end": 72
                  },
                  "kind": "namespace",
                  "declare": true,
                  "global": false,
                  "start": 44,
                  "end": 72
                }
              ],
              "start": 38,
              "end": 76
            },
            "kind": "namespace",
            "declare": true,
            "global": false,
            "start": 17,
            "end": 76
          }
        ],
        "start": 13,
        "end": 78
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 78
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 17,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 44,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 52,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 62,
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
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  }
]
```
