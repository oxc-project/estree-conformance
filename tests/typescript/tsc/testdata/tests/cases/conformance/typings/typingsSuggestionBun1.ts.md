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
            "name": "file",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bun",
                "optional": false,
                "typeAnnotation": null,
                "start": 13,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "file",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 21
              },
              "optional": false,
              "computed": false,
              "start": 13,
              "end": 21
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/a.ts",
                "raw": "\"/a.ts\"",
                "start": 22,
                "end": 29
              }
            ],
            "optional": false,
            "start": 13,
            "end": 30
          },
          "definite": false,
          "start": 6,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 31
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
    "value": "file",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "Bun",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "file",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"/a.ts\"",
    "start": 22,
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
    "value": ";",
    "start": 30,
    "end": 31
  }
]
```
