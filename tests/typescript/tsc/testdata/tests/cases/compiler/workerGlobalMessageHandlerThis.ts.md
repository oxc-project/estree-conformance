__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMessageReader",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 36
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "port",
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
                    "name": "MessagePort",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 43,
                    "end": 54
                  },
                  "typeArguments": null,
                  "start": 43,
                  "end": 54
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Worker",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 63
                  },
                  "typeArguments": null,
                  "start": 57,
                  "end": 63
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DedicatedWorkerGlobalScope",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 66,
                    "end": 92
                  },
                  "typeArguments": null,
                  "start": 66,
                  "end": 92
                }
              ],
              "start": 43,
              "end": 92
            },
            "start": 41,
            "end": 92
          },
          "start": 37,
          "end": 92
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 95,
          "end": 99
        },
        "start": 93,
        "end": 99
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMessageReader",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 120
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 125
          }
        ],
        "optional": false,
        "start": 101,
        "end": 126
      },
      "directive": null,
      "start": 101,
      "end": 127
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
            "name": "event",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MessageEvent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 162
                },
                "typeArguments": null,
                "start": 150,
                "end": 162
              },
              "start": 148,
              "end": 162
            },
            "start": 143,
            "end": 162
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 162
        }
      ],
      "declare": true,
      "start": 129,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 168
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "onmessage",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 178
            },
            "optional": false,
            "computed": false,
            "start": 164,
            "end": 178
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "event",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 186
            }
          ],
          "optional": true,
          "start": 164,
          "end": 187
        },
        "start": 164,
        "end": 187
      },
      "directive": null,
      "start": 164,
      "end": 188
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 188
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "createMessageReader",
    "start": 17,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "port",
    "start": 37,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "MessagePort",
    "start": 43,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "DedicatedWorkerGlobalScope",
    "start": 66,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 95,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "createMessageReader",
    "start": 101,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 129,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 143,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "MessageEvent",
    "start": 150,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "onmessage",
    "start": 169,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  }
]
```
