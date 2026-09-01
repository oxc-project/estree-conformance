__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 38
        },
        "generator": true,
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
                "start": 39,
                "end": 40
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 39,
              "end": 40
            }
          ],
          "start": 38,
          "end": 41
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 46
                },
                "typeArguments": null,
                "start": 45,
                "end": 46
              },
              "start": 43,
              "end": 46
            },
            "start": 42,
            "end": 46
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 63
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
                    "start": 64,
                    "end": 65
                  },
                  "typeArguments": null,
                  "start": 64,
                  "end": 65
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "typeArguments": null,
                  "start": 67,
                  "end": 68
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
                  },
                  "typeArguments": null,
                  "start": 70,
                  "end": 71
                }
              ],
              "start": 63,
              "end": 72
            },
            "start": 49,
            "end": 72
          },
          "start": 47,
          "end": 72
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "start": 77,
              "end": 85
            }
          ],
          "start": 73,
          "end": 174
        },
        "expression": false,
        "start": 18,
        "end": 174
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 11,
      "end": 174
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 11,
  "end": 174
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 11,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 18,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
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
    "value": "AsyncGenerator",
    "start": 49,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  }
]
```
